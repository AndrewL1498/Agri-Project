import React, { useEffect, useState } from "react";
import "./home/image.css";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const myUsername = "ritikamahato924";

  useEffect(() => {
    fetch("https://api.github.com/repos/ritikamahato924/Agri-Project/contributors")
      .then((res) => res.json())
      .then((data) => {
        // filter out our own account
        const filtered = data.filter((c) => c.login !== myUsername);
        setContributors(filtered);
        setLoading(false);
      })
      .catch((err) => console.error(err) , setLoading(false));
  }, []);

  return (
  <section id="contributors">
    <div className="contributors-header">
      <h2 className="hover-underline contributors-title">Our Contributors</h2>
      <p className="contributors-subtitle">Thanks to everyone who helped build this project 🌱</p>
    </div>
    {loading ? <p className="contributors-loading">Loading...</p> : (
      <div className="contributors-grid">
        {contributors.map((c) => (
          <div className="contributor-card" key={c.id}>
            <div className="contributor-avatar-wrapper">
              <img src={c.avatar_url} alt={c.login} className="contributor-avatar" />
            </div>
            <div className="contributor-info">
              <h3 className="contributor-name">{c.login}</h3>
              <a href={c.html_url} target="_blank" rel="noopener noreferrer" className="contributor-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
  );
};

export default Contributors;