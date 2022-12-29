# ZSH Defaults

export ZSH="$HOME/.oh-my-zsh"

# Costumization

ZSH_THEME="robbyrussell"

plugins=(git dirhistory colored-man-pages zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh

# My Conigurations

## Fuzzy Finder

source /home/hunterdi/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

## Docker AutoStart

DOCKER_DISTRO="Ubuntu"
DOCKER_DIR=/mnt/wsl/shared-docker
DOCKER_SOCK="$DOCKER_DIR/docker.sock"
export DOCKER_HOST="unix://$DOCKER_SOCK"
if [ ! -S "$DOCKER_SOCK" ]; then
   mkdir -pm o=,ug=rwx "$DOCKER_DIR"
   sudo chgrp docker "$DOCKER_DIR"
   /mnt/c/Windows/System32/wsl.exe -d $DOCKER_DISTRO sh -c "nohup sudo -b dockerd < /dev/null > $DOCKER_DIR/dockerd.log 2>&1"
fi

export DOCKER_BUILDKIT=0
export BUILDKIT_PROGRESS=plain

## Homebrew

test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
test -r ~/.bash_profile && echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.bash_profile
echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.profile

## Go

# export PATH=$PATH:/usr/local/go/bin

## NVM

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

## PyEnv

## export PYENV_ROOT="$HOME/.pyenv"
## command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
## eval "$(pyenv init -)"

## Aliases

alias code="code-insiders"
alias gadd="git add ."
alias explorer="explorer.exe"

export NVM="$HOME/.nvm"
