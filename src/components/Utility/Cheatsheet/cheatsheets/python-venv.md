# Python virtual enviroments

I always forget how to work with python virtual enviroments so here's a cheatsheet

## Create a virtual enviroment

```bash
python3 -m venv /path/to/new/virtual/environment
```

## Activate a virtual enviroment
Use the corresponding command:

| Platform | Shell      | Command to activate       |
|----------|------------|---------------------------|
| Linux    | bash       | `source <env>/bin/activate` |
| Windows  | cmd.exe    | `\Scripts\activate.bat`     |
| Windows  | PowerShell | `\Scripts\Activate.ps1`     |

To quit the virtual enviroment, just type `deactivate`

## Install virtual enviroment dependencies
The dependencies are usually specified in a `requeriments` text file.

to install, run the following:
```bash
python3 -m pip install -r requirements.txt
```

## Generate the requeriments.txt file 
If your project is new and doesn't have a `requeriments.txt` file yet, install all of the needed dependencies with pip and then run:
```bash
python3 -m pip freeze
```

## Useful Links
- [Python Docs | Creating virtual enviroments](https://docs.python.org/es/3/library/venv.html)
- [Python Packaging | Installing packages using pip and virtual environments](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)