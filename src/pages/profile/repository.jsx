import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import Pagination from "../../utils/Pagination";

import LoadingImage from "../../assets/loading.gif";

const repoUrl = " https://api.github.com/users/blyncnov/repos";

const Repository = () => {
  const [repository, setRepository] = useState([]);
  const [ReposPerPage] = useState(10);
  const [currentRepository, setcurrentRepository] = useState(1);

  const indexOfLastPage = ReposPerPage * currentRepository; // 10
  const indexOfFirstPage = indexOfLastPage - ReposPerPage; // 0
  const ModifiedReposCount = repository.slice(
    indexOfFirstPage,
    indexOfLastPage
  ); // (0, 5)

  const FetchGitHubData = () => {
    // Fetch Repository Data
    axios.get(repoUrl).then((res) => {
      setRepository(res.data);
    });
  };

  useEffect(() => {
    FetchGitHubData();
  }, []);

  console.log(repository);

  return (
    <>
      {repository?.length !== 0 ? (
        <div className="repo-container">
          <div className="repo-container-tag">
            <p>My Repositories</p>
          </div>
          <div className="repo-container-content">
            {ModifiedReposCount.map((repo, index) => {
              return (
                <div className="repos-contents" key={repo.id}>
                  <a href={repo.url}>
                    <p>
                      {index}. {repo.name}
                    </p>
                  </a>
                </div>
              );
            })}
            <br />
            <Pagination
              repositoryApIResult={repository}
              ReposPerPage={ReposPerPage}
              currentRepository={currentRepository}
              setcurrentRepository={setcurrentRepository}
            />
          </div>
        </div>
      ) : (
        <div className="loading-state">
          <img src={LoadingImage} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Repository;
