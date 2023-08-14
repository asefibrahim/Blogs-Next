import React from "react";
import Swal from "sweetalert2";
import StoreComment from "../customHook/StoreComment";

const CommetSection = ({id}) => {
    const submitcomment = (event)=>{
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const user = form.user.value;
        if(!comment && !user){
            Swal.fire(
                'Empty?',
                'Must filup from first',
                'question'
              )
            return;
        }
        const commentdata = {comment,user};
        StoreComment(id,commentdata);
        form.reset();
    }
  return (
    <div className="py-10 mt-5 border-t">
      <form onSubmit={submitcomment}>
        <textarea
          className="border w-3/5 outline-none rounded-md min-h-16 max-h-72 p-3 text-sm"
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          placeholder="write your comment"
        ></textarea>
        <input
          className="block border px-2 py-1 text-sm rounded-md outline-none"
          type="text"
          placeholder="Name or Email Address"
          name="user"
        />
        <input
          type="submit"
          className="text-sm px-5 py-2 bg-yellow-500 mt-3 rounded-md font-bold text-white"
        />
      </form>
    </div>
  );
};

export default CommetSection;
