# **CSI606-2021-02 - Agenda de Compromisso - Trabalho Final - Resultados**

## *Aluna(o): Lê Alves*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

  O sistema de agenda de compromissos tem como objetivo auxiliar os usuários na organização de suas tarefas e atividades diárias. À agenda é voltada para garantir uma gestão eficiente de compromissos, permitindo aos usuários adicionar, editar, excluir e pesquisar compromissos de maneira simples e intuitiva. Além disso, o sistema inclui funcionalidades de notificação por e-mail, enviando alertas automáticos sempre que um compromisso é criado, editado ou excluído.

### 1. Funcionalidades implementadas
 A solução foi projetada para melhorar a produtividade e proporcionar uma visão clara dos compromissos do usuário, oferecendo as seguintes funcionalidades principais:

  1. Adicionar Compromissos: Criação de novos compromissos com campos obrigatórios como título, data e e-mail. Após o cadastro, uma notificação por e-mail é enviada.

  2. Editar Compromissos: Permite a modificação de qualquer campo dos compromissos existentes.

  3. Excluir Compromissos: Remove compromissos da lista e envia um e-mail de confirmação ao usuário.

  4. Filtrar Compromissos por Data: Pesquisa de compromissos com base em critérios como mês e ano.

  5. Marcar Compromissos como Concluídos: Atualização do status de compromissos para ajudar no acompanhamento.

  6. Notificações Automáticas por E-mail: Envio de e-mails em caso de criação, edição ou exclusão de compromissos.
  
### 2. Funcionalidades previstas e não implementadas
Todas as funcionalidades previstas foram implementadas

### 3. Outras funcionalidades implementadas
Foi implementado o Padrão de projeto Singleton para realizar uma única conexão com o banco de dados 
Implementado também o padrão de projeto Observer, que comunica por e-mail caso realize algum CRUD no evento.

### 4. Principais desafios e dificuldades
Os principais desafios durante a criação do projeto foram:
1. a lógica do backend, por ser uma linguagem nova, demorei um pouco para conseguir entender. 
2. Trabalhar com hierarquia com o Boostrap. 

### 5. Instruções para instalação e execução
1. Para que você consiga rodar, necessário ter o python instalado na
sua máquina, e os seguintes pacotes também: Flask, sqlite3, smtplib e email, 
esses pacotes podem ser intalados com o pip. 
2. Na pasta backend, execute o seguinte comando "python app.py"
3. O servidor irá rodar na porta 5000, no http: //127.0.0.1:5000 
4. Para que você consiga criar um compromisso, é necessário vincular um e-mail 
5. Aconselho o uso do e-mail que foi criado para o teste do projeto 
trab.agendamento@gmail.com, que tem a seguinte senha de acesso "praontem"


### 6. Referências
  O sistema utiliza padrões de design como Singleton, para gerenciar conexões de banco de dados, e Observer, para o mecanismo de notificação, garantindo flexibilidade e fácil manutenção. Dessa forma, a agenda digital se destaca pela eficiência no gerenciamento de tarefas e pela integração de notificações automáticas, tornando a solução prática e robusta.
