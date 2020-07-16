# Como Contribuir

O Soma Design System, assim como todo seu ecossistema, são bibliotecas de uso colaborativo e todos do time podem contribuir para a evolução. Em busca de garantir qualidade e consistência em todos os componentes criamos algumas boas práticas que devem ser seguidas para criação de novos componentes:

* Embasado nos Princípios de Design;
* Construído com Design Tokens;
* Contemplando todos os estados, variações do componente e versão Inverse (se aplicável);
* Contemplando comportamento responsivo para Web;
* Contemplando compatibilidade cross-browser até o IE11;
* Seguindo diretrizes de acessibilidade;
* Seguindo diretrizes de monitoramento;
* Construido com Stencil;
* Aprovado pelo Representante de Tribo;

Ajuda bastante se seu componente estiver:

* Validado com usuário em contexto de uso;
* Validado com desenvolvedores (Web, Android, iOS);

Após essas etapas concluídas, os componentes já codados e submetidos a lib entram no flow de Review de Design e Tecnologia. É necessário a criação de um Pull Request que será analisado e se aprovado o componente será pública na nova versão do Soma.

## Contribuindo

O Git Flow é um modelo de conjunto de diretrizes que equipes de desenvolvimento podem seguir para organizar as branches. Nós seguimos uma **variação do git flow** para *long time branch support*. É importante ressaltar também que as libraries seguem *semantic-version*.

### Branches Principais
- **Master**: branch de *vitrine*, contém o histórico limpo de commits devido ao fluxo com squash commit e possui sempre a versão latest.
- **Branches de Versão**: São as branches que serão disponibilizadas para uso. Sempre que uma nova release for publicada ele é juntada a essa branch e sua versão é incrementada.

### Branches de Suporte e Trabalho
- **Release**: A branch de release é setada no início da sprint, é a principal branch de desenvolvimento, dela saem as features e hotfixes com todas as funcionalidades e correções propostas para aquela release, no final da srpint a branch de release é mergeada na branch de versão.
- **Hotfix**: Hotfixes são branches relacionadas a bugs.
- **Feature**: Features são branches relacionadas a novas funcionalidades.

<img src="../collection/_documentation/assets/flow.svg" style="width: 650px">
<h6>fluxo de ci/cd</h6>

## Suporte

Nós vamos dar suporte para a latest, latest.minor-1.path e latest-1.minor.path. Exemplo: se estamos na v2.4.3 e nossa v1 foi até v1.9.14 e nossa v2.3 foi até v2.3.8, vamos da suporte para v2.3.8 e para v1.9.14.

Um lock é realizado na branch de versão após ela parar de haver suporte.

## Nomenclatura

### Branches:

Para branches utilizamos:

* master
* vMAJOR
* feature/
* release/
* hotfix/

É importante utilzarmos essa nomenclatura para atender o pipeline da Azure.

### Commits:

Para o nome dos commits são utilizados [karma commit](http://karma-runner.github.io/4.0/dev/git-commit-msg.html) (feat/fix/docs/style/refactor/test/chore/core). E o padrão utilizado pelo angular:
karma(principal): Comentário.


## Monorepo ou Multirepo

Somente o DesOps.Soma é um monorepo que possui 4 packages, ele utiliza o lerna para facilitar o desenvolvimento.