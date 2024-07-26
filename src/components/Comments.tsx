import { useState } from "react"

export default function Comments() {
    const [comment, setComment] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: { name, value },
        } = e;

        if (name === "comment") {
            setComment(value);
        }
    }

    return (
        <div className="comments">
            <form className="comments__form">
                <div className="form__block">
                    <label htmlFor="comment">댓글 입력</label>
                    <textarea name="comment" id="comment" required value={comment} onChange={onchange}></textarea>
                </div>
            </form>
        </div>
    );
}