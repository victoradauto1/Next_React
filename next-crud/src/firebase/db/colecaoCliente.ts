import Cliente from "@/core/Cliente";
import clienteRepositorio from "@/core/clienteRepositorio";
import firebase from '../config'

export default class ColecaoCliente implements clienteRepositorio{


    #conversor = {
        toFirestore(cliente: Cliente){
            return{
                nome: cliente.nome,
                idade: cliente.idade
            }
        }, fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente | null): Promise<Cliente> {
        if (cliente?.id) {
            await this.#coleção().doc(cliente.id).set(cliente);
            return cliente;
        } else if (cliente !== null) {
            const docRef = await this.#coleção().add(cliente);
            const doc = await docRef.get();
            
        
            const clienteSalvo = doc.data?.() as Cliente;
    
            if (clienteSalvo) {
                return clienteSalvo;
            } else {
                throw new Error("Erro ao obter dados do cliente após salvamento.");
            }
        } else {
            throw new Error("Cliente não pode ser nulo quando id não está presente.");
        }
    }
    
    
    
    async excluir(cliente: Cliente | null): Promise<void> {
        if (cliente !== null && cliente !== undefined) {
            if (cliente.id !== null && cliente.id !== undefined) {
                return this.#coleção().doc(cliente.id).delete();
            }
        }
    }
    
    async obterTodos(): Promise<Cliente[]>{
        const query = await this.#coleção().get()
        return query.docs.map(doc => doc.data()) ?? []
        
    }

    #coleção(){
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}