
const commitHistory = [
    {
      "sha": "abcd1234",
      "message": "Initial commit",
      "date": "2024-01-01T12:00:00Z"
    },
    {
      "sha": "efgh5678",
      "message": "Add feature XYZ",
      "date": "2024-01-02T14:30:00Z"
    },

  ];
  
  function findLatestCommit(commits) {
    if (commits.length === 0) {
      return null;
    }

    commits.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    return commits[0];
  }
  
  const latestCommit = findLatestCommit(commitHistory);
  
  if (latestCommit) {
    console.log("Latest Commit:");
    console.log(`SHA: ${latestCommit.sha}`);
    console.log(`Message: ${latestCommit.message}`);
    console.log(`Date: ${latestCommit.date}`);
  } else {
    console.log("No commits found.");
  }
  