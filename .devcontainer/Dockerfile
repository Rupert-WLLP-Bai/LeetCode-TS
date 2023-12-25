FROM ubuntu:latest

RUN sed -i 's|ports.ubuntu.com|mirrors.ustc.edu.cn/ubuntu-ports|g' /etc/apt/sources.list

RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    wget \
    axel \
    git \
    zsh \
    htop \
    vim \
    tmux \
    tree \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set up Oh My Zsh
RUN git clone https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git &&\
    cd ohmyzsh/tools &&\
    REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git sh install.sh

# Set up the default shell to Zsh
RUN chsh -s /usr/bin/zsh

# mount ssh key
RUN mkdir -p /root/.ssh && \
    ssh-keyscan github.com >> /root/.ssh/known_hosts && \
    chmod 700 /root/.ssh && \
    chmod 600 /root/.ssh/*

# 安装 Node.js 和 NPM
RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && \
    apt-get install -y nodejs

# 设置 npm 镜像为 cnpmjs.org 的镜像
RUN npm config set registry https://registry.npmmirror.com


# 安装全局TypeScript编译器
RUN npm install -g typescript pnpm

# 暴露端口
EXPOSE 3000