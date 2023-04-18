import { HTMLProps } from 'react'
import styles from './styles.module.css'

export function Textearea({...rest}: HTMLProps<HTMLTextAreaElement>){
    return <textarea className={styles.textarea} {...rest}>

    </textarea>
}