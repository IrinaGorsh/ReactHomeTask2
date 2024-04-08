/*Задание: Список комментариев с удалением.

/*Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного /интерфейса.

/*Задача:
Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка. */


import React, { useState } from "react";

export function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);

    const handleDelete = (deleteComment) => {
const newComments = comments.filter((comment) => comment !== deleteComment);
setComments(newComments);
    }

    return comments.map((comment) =>
    <div>        
         <ul>
            <li key={comment.id}>{comment.text} <button onClick={() => handleDelete(comment)}>Удалить</button></li>
         </ul>
    </div>
    )
}

export default CommentsList;