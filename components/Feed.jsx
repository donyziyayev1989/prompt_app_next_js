"use client";
import { useEffect, useState } from "react";
import Promptcard from "./Promptcard";

export const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Promptcard
          post={post}
          key={post._id}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPrompts();
  }, []);

  const filterPrompts = (s) => {
    const regex = new RegExp(s, "i");

    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.prompt) ||
        regex.test(post.tag)
    );
  };
  const handleSearchChange = (e) => {
    let timeOutId;
    clearTimeout(timeOutId);
    setSearchText(e.target.value);
    timeOutId = setTimeout(() => {
      const results = filterPrompts(e.target.value);
      setSearchResult(results);
    }, 300);
  };
  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const results = filterPrompts(tagName);
    setSearchResult(results);
  };
  return (
    <section className="feed">
      <form className="w-full flex-center responsive">
        <input
          type="text"
          className="search_input peer"
          value={searchText}
          required
          onChange={handleSearchChange}
        />
      </form>
      {searchText ? (
        <PromptCardList data={searchResult} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
