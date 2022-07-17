import React from 'react'



const Contact = [
    {
        name: 'jihad' ,
        avatar : "https://unsplash.com/photos/ZHvM3XIOHoE"
    }
]







export default function ContactList() {
  return (
    <ul>
        {Contact.map((contact)=> {
            return
                <li>{contact.name}</li>
            

        })}
    </ul>
  )
}
