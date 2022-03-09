(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{408:function(s,a,e){"use strict";e.r(a);var t=e(19),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" Linux安装")]),s._v(" "),e("h2",{attrs:{id:"_1、linux安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、linux安装docker"}},[s._v("#")]),s._v(" 1、linux安装docker")]),s._v(" "),e("blockquote",[e("p",[s._v("Docker 安装文档：https://docs.docker.com/install/linux/docker-ce/centos/")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("卸载系统之前的docker")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum remove docker \\\ndocker-client \\\ndocker-client-latest \\\ndocker-common \\\ndocker-latest \\\ndocker-latest-logrotate \\\ndocker-logrotate \\\ndocker-engine\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("安装Docker-CE")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("安装必须的依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum install -y yum-utils \\\ndevice-mapper-persistent-data \\\nlvm2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置docker repo 的yum 位置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum-config-manager \\\n--add-repo \\\nhttps://download.docker.com/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("安装docker，以及docker-cli")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum install docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("启动docker")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo systemctl start docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("查看docker版本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看docker 镜像列表")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("设置开机自启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo systemctl enable docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("测试docker 常用命令，注意切换到root 用户下")]),s._v(" "),e("blockquote",[e("p",[s._v("https://docs.docker.com/engine/reference/commandline/docker/")])])]),s._v(" "),e("li",[e("p",[s._v("配置docker 镜像加速")]),s._v(" "),e("blockquote",[e("p",[s._v("阿里云，容器镜像服务\n针对Docker 客户端版本大于1.10.0 的用户\n您可以通过修改daemon 配置文件/etc/docker/daemon.json 来使用加速器")])])])]),s._v(" "),e("h3",{attrs:{id:"常见错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[s._v("#")]),s._v(" 常见错误：")]),s._v(" "),e("h4",{attrs:{id:"_1、镜像名重复或已存在"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、镜像名重复或已存在"}},[s._v("#")]),s._v(" 1、镜像名重复或已存在")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('docker: Error response from daemon: Conflict. The container name "/mysql" is already in use by container "9f52d88a12eadbfb81707191fe2c2090f5dcfbd1f6a7461d97e32ad947c2feab". You have to remove (or rename) that container to be able to reuse that name.\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解法方法：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("先查看镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker ps -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@xiaobear ~]# docker ps -a\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES\n9f52d88a12ea   mysql     "docker-entrypoint.s…"   7 minutes ago   Exited (1) 7 minutes ago             mysql\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("移除"),e("code",[s._v("CONTAINER ID")]),s._v("名")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker rm 9f52d88a12ea\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("再创建新的容器")])])]),s._v(" "),e("h2",{attrs:{id:"_2、linux安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、linux安装jdk"}},[s._v("#")]),s._v(" 2、linux安装jdk")]),s._v(" "),e("p",[s._v("1、先去官网下载好对应的linux版本的压缩包，https://www.oracle.com/java/technologies/downloads/#java8")]),s._v(" "),e("p",[s._v("2、将压缩包通过ftp进行上传至服务器")]),s._v(" "),e("p",[s._v("3、进入目录，进行解压")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /压缩包目录\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v("  -zxvf  jdk-8u131-linux-x64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("4、进入环境变量文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("5、增加环境变量")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("//JAVA_HOME"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("解压后的jdk路径"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("改成自己的"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/java/jdk1.8.0_181\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("6、配置文件生效")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("7、查看是否安装成功")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("java -version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3、linux安装nacos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、linux安装nacos"}},[s._v("#")]),s._v(" 3、linux安装nacos")]),s._v(" "),e("p",[s._v("1、从官网地址下载最新安装包：https://github.com/alibaba/nacos/releases")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nacos-server-2.0.3.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、查看官方安装教程：https://nacos.io/zh-cn/docs/quick-start.html")]),s._v(" "),e("p",[s._v("3、解压nacos")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zvxf nacos-server-2.0.3.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、更改配置")]),s._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("server.port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8848")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#*************** Network Related Configurations ***************#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### If prefer hostname over ip for Nacos server addresses in cluster.conf:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos.inetutils.prefer-hostname-over-ip=false")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Specify local server's IP:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos.inetutils.ip-address=")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#*************** Config Module Related Configurations ***************#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### If use MySQL as datasource:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.datasource.platform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Count of DB:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.num")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Connect URL of DB:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.url.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://127.0.0.1:3306/ry-config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("123456")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Connection pool configuration: hikariCP")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.pool.config.connectionTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("30000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.pool.config.validationTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("10000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.pool.config.maximumPoolSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("20")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.pool.config.minimumIdle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("5、启动命令(standalone代表着单机模式运行，非集群模式)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd nacos/bin\nsh startup.sh -m standalone\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("6、关闭服务器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sh shutdown.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("备注：")]),s._v(" "),e("p",[s._v("2.0以上版本记得多开放端口")]),s._v(" "),e("p",[s._v("Nacos2.0版本相比1.X新增了gRPC的通信方式，因此需要增加2个端口。新增端口是在配置的主端口(server.port)基础上，进行一定偏移量自动生成。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[s._v("端口")]),s._v(" "),e("th",{staticStyle:{"text-align":"left"}},[s._v("与主端口的偏移量")]),s._v(" "),e("th",{staticStyle:{"text-align":"left"}},[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("9848")]),s._v(" "),e("td",{staticStyle:{"text-align":"left"}},[s._v("1000")]),s._v(" "),e("td",{staticStyle:{"text-align":"left"}},[s._v("客户端gRPC请求服务端端口，用于客户端向服务端发起连接和请求")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("9849")]),s._v(" "),e("td",{staticStyle:{"text-align":"left"}},[s._v("1001")]),s._v(" "),e("td",{staticStyle:{"text-align":"left"}},[s._v("服务端gRPC请求服务端端口，用于服务间同步等")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);