
# python 入门

## 0x00 why python

> 为什么要学习 python ？相信很多同学都有这个疑问。有一篇漫画很好地解释了这个问题，这则漫画也可以通过在 python 中运行 `import antigravity` 后看到。

![Image text](https://imgs.xkcd.com/comics/python.png)
<!-- ![Image text](https://mmbiz.qpic.cn/mmbiz_png/TO0Oq5hdvxnZfx5cnlpbI1RGYUEj8ricMjOY2QQgjVuGCew27dWTpS9Q7QxCwnt1miaDUlj92EOBG3K9a5NCLWnA/0?wx_fmt=png) -->

> 优雅，简洁，很多操作被高度封装，只需要简单地 `import` 需要的包之后直接使用即可，这便是 python 能带给我们的便利之处。借助 python，你可以不用像使用 C++ 或者 Java 那样关注很多底层较为细枝末节的地方，转而专注于实现你的逻辑关系，完成快速、简洁地开发。可以说，python 对于新手的门槛是非常低的，能很快地让学习者获得正反馈，并产生继续学习的动力。python 有很多可以应用的地方，比如数据分析处理，作图可视化，Web 爬虫，机器学习，深度学习。再比如，位于新生 QQ 群中的 bot 也是通过 python 由笔者编写的。


## 0x01 安装运行环境

> 想要入门 python，首先是安装 python 的运行环境。对于新手来说，一般推荐通过安装 [Anaconda](https://docs.anaconda.com/anaconda/) 包管理软件来获得良好的 python 使用体验。其原因在于在安装 Anaconda 时会附带安装很多常用的 python 库，相较于只安装纯净的 python 然后自己一个个去安装需要的包，这无疑省下了很多精力。而且在安装 Anaconda 的时候还会附带神器 Jupyter Notebooks，这是一款非常灵活的开发工具，能让我们方便地编写代码，并进行数据的可视化。
>
> 当然，我们现在讨论的 python 基本都是最新的 python3。python2 已经完成了自己的历史使命并即将在 2020 年停止维护，不值得我们专门去学习。
>
> 接下来分 3 种主流操作系统依次介绍 Anaconda 的安装方法，同时建议在安装时关闭某些弱智杀毒软件。

### Windows

1. 到 <https://www.anaconda.com/distribution/> 下载 Python 3.x 版本的 Windows Installer。
2. 等待下载完成，运行下载的 exe 文件。
3. 一路 next 并同意协议。
4. 在选择 installtion type 时建议选择 just me。
5. 在配置 advanced installation options 时，对于第一次安装 python 运行环境的同学，建议将 Add Anaconda to my PATH environment variable 也勾上。如果没有勾上，记得在安装完成后手动添加 PATH。
6. 等待安装完成，pycharm可以选择性安装（暂时不建议），点击 finsh。
7. 打开 powershell 或者 cmd （或者任何你喜欢的 terminal），输入 `conda --version` 验证运行环境是否安装成功。如果输出了 conda 的版本，那表明安装成功。（关于怎么打开 powershell 或者 cmd，按下 `Win + R`，输入 powershell 或者 cmd 以后敲击回车。）
8. Enjoy it!

### MacOS

1. 到 <https://www.anaconda.com/distribution/> 下载 Python 3.x 版本的 macOS Installer。
2. 等待下载完成，运行下载的 pkg 文件。
3. 一路选择 continue 并同意协议。
4. 在选择安装的位置时推荐选择 current user。
5. 等待安装完成，pycharm可以选择性安装（暂时不建议），点击 done。
6. 打开 terminal，输入 `conda --version` 验证运行环境是否安装成功。如果输出了 conda 的版本，那表明安装成功。
7. 如果提示 conda 命令没有找到，且 terminal 中使用了非 bash 的别的 shell， 需要打开 `~/.bash_profile` 将 conda 的环境变量初始化脚本粘贴到当前使用的 shell 的配置环境变量文件中（如 `.zshrc`）。
8. Enjoy it!

### Linux

1. 到 <https://www.anaconda.com/distribution/> 下载 Python 3.x 版本的 Linux Installer，并运行。撰稿时在 terminal 中使用的命令：
```bash
wget https://repo.anaconda.com/archive/Anaconda3-2019.07-Linux-x86_64.sh
bash Anaconda3-2019.07-Linux-x86_64.sh
```


2. 按住回车浏览协议，输入 yes 同意协议。
3. 确认安装位置，并按回车确认。
4. 等待安装完成，在选择是否 initialize anaconda3 时推荐选择 yes。
5. 输入 `conda --version` 验证运行环境是否安装成功。如果输出了 conda 的版本，那表明安装成功。
6. Enjoy it!

> 在安装完 anaconda 后，推荐使用 conda 替代 pip 作为 python 的包管理工具。关于 conda 系列的包安装和管理工具，由于在本教程中不会用到，请读者自行查阅了解。可参考如下 pdf <https://docs.conda.io/projects/conda/en/latest/_downloads/1f5ecf5a87b1c1a8aaf5a7ab8a7a0ff7/conda-cheatsheet.pdf>。
>
> 我们还可以进行一些额外的操作，比如对 conda 换源。源，指的是当你使用 conda 进行下载安装时的下载源，默认的下载源的服务器在国内的访问速度不甚理想，所以可以换成国内的下载源来增加下载速度。具体操作可以参见<https://mirror.tuna.tsinghua.edu.cn/help/anaconda/>。

## 0x02 jupyter notebook 实践

> 接下来我们来使用一下 jupyter notebook 这一神器。

1. 首先运行 jupyter notebook（直接运行或者通过 Anaconda Navigator 运行）。
2. 这时浏览器中应该会开启 jupyter 主页，点击右上角的 New，选择 python3，新建一个 notebook。
3. 单击一个单元格，光标在单元格内闪动，便可以往里输入代码，在输入完毕后，按下 `Shift+Enter` 运行当前单元格内的脚本并切换到下一个单元格，或者单击上方的 `Run` 按钮运行当前单元格内脚本。

---

介绍完操作，我们可以来通过下面的代码来体验一下 python 的魅力了：

一行代码求出 0 加到 100 的和，输出为 `5050`。

```python
print(sum([i for i in range(101)]))
```

---

一行代码求出 1 到 100 的和，输出为 `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`。

```python
print([i for i in range(2, 101) if 0 not in [i % j for j in range(2, i)]])
```

---

打印杨辉三角前 10 行

```python
f = [1]
for i in range(10):
    print(f)
    f = [x + y for x, y in zip([0] + f, f + [0])]
```

输出：

```python
[1]
[1, 1]
[1, 2, 1]
[1, 3, 3, 1]
[1, 4, 6, 4, 1]
[1, 5, 10, 10, 5, 1]
[1, 6, 15, 20, 15, 6, 1]
[1, 7, 21, 35, 35, 21, 7, 1]
[1, 8, 28, 56, 70, 56, 28, 8, 1]
[1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
```

---

或者将三玖下载到当前目录下？

```python
import requests
import threading
tags = "nakano_miku"
imgUrls = [item['jpeg_url'] for item in requests.get(f"https://yande.re/post.json?tags={tags}").json()]
def getImg(i, url):
    r = requests.get(url)
    print(f'./{i}.jpg', url)
    with open(f'./{i}.jpg','wb') as f:
        f.write(r.content)
for i, url in enumerate(imgUrls[:10]):
    threading.Thread(target=getImg, args=(i, url)).start()
```


## 0x03 结语

> 显然这些实践还远远不够，如果有什么感兴趣的，想用 python 写出来的东西，欢迎通过后台联系技术部，说不定下篇推送中就有你想要的内容。
