import { deepStrictEqual, strictEqual } from 'assert';

import findLatestCommit from '../app/latestCommit.js'; 
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

describe('findLatestCommit', () => {
    it('should return the latest commit when given a non-empty array of commits', () => {
        const expected = {
          "sha": "efgh5678",
          "message": "Add feature XYZ",
          "date": "2024-01-02T14:30:00Z"
        };
        const result = findLatestCommit(commitHistory);
        deepStrictEqual(result, expected);
    });

    it('should return null when given an empty array of commits', () => {
        const emptyCommitHistory = [];
        const result = findLatestCommit(emptyCommitHistory);
        strictEqual(result, null);
    });

});
