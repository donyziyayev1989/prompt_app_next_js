"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Promptcard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copy, setCopy] = useState("");
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleCopy = () => {
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopy("");
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 gap-3 cursor-pointer items-center">
          <Image
            src={post.creator.image}
            alt={post.creator.username}
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold font-satoshi ">
              {post.creator.username}
            </h3>
            <p className="text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            alt="copy_btn"
            src={
              copy === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-3">{post.prompt}</p>
      <p
        className="blue_gradient cursor-pointer text-sm"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {session?.user.id === post.creator._id && pathname === "/profile" && (
        <div className="flex justify-self-center gap-3">
          <button
            className="text_sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="text_sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Promptcard;
