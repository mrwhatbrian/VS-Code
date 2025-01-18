# Handling Filenames with Colons in Git
## Safely Unstaging Files with Special Characters

```sh
git clone {repo URL}
cd {repo dir}
git ls-tree -r master --name-only | grep -v ":" | xargs git reset HEAD
git commit -m "deleting all files with a colon in the name"
git restore .
```
