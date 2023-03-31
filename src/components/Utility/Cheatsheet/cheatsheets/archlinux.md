# ArchLinux Cheatsheet
I installed Arch in an old notebook that wouldn't even run Windows 7 for some reason. Since I use it for work when I travel, this comes handy to keep the system properly mantained after not using it for a while.

# Useful Links
- [ArchLinux "Comfy" Installation Guide](https://www.youtube.com/watch?v=68z11VAYMS8)
- [Archlinux wiki | Always check this first before googling!](https://wiki.archlinux.org/)

## Keeping system up to date
```bash
# Update Arch with package manager
$ sudo pacman -Syu

# Update apps installed from SnapStore
$ sudo snap refresh
```
## Package Management
### --- Installing packages ---
From Arch Official Repos:
```bash
$ sudo pacman -S <package_name> <package_name> ...
```

From Arch User Repository:
```bash
$ git clone <repo-link>
$ cd <repo-folder>
$ makepkg -si
```
Note: `pacman -Syu` won't update installs from  Arch User repositories. You have to go to the cloned repo, pull it and then `makepkg -si` for it to install the lastest version avaible in the repo.

### --- Removing packages ---
Remove package installed (and all of the installed dependencies that were installed for this package but are not required by other packages) with `pacman` :
```bash
$ sudo pacman -Rns <package_name> <package_name> ...
```
Remove package installed from SnapStore:
```bash
$ sudo snap remove <app-name>
```

## Debugging stuff
If asking in Arch Forums, the community **WILL** ask you to post info/logs. They will normally suggest commands for the specific issue to check, so this section is just for general purposes instead.

Redirect console output to ```log-file.txt```:
```bash
$ cmd-that-outputs-stuff > path/to/log-file.txt
```
Checking system journal:
```bash
# -e flag just shows most recent 1000 lines. Remove flag for the whole thing
$ journalctl -e
```
To filter / search output, use `grep`.

-> [`grep` documentation](https://man.archlinux.org/man/grep.1.en)

```bash
# Example: Search for lines that contain "OpenGL vendor"
$ glxinfo | grep "OpenGL vendor"
OpenGL vendor string: NVIDIA Corporation # Example output
```