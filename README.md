# president_of_activities

## Directory tree
- FrontEnd
- BackEnd

## Branch
### Naming
- master
- develop
- feature/{frontend or backend}/{feature_name}
  - ex) feature/backend/user

### Concept
- master(실제 사용 X)
> 제품으로 출시될 수 있는 브랜치 배포 이력을 관리하기 위해 사용. 즉 배포 가낭한 상태만을 관리한다.

- develop
>  기능 개발을 위한 브랜치들을 병합하기 위해 사용. 모든 기능이 추가되고 버그가 수정되어 배포 가능한 안정적인 상태라면 develop 브랜치를 master 브랜치치에 병합한다. 평소 이 브랜치를 기반으로 개발을 진행한다.

- feature
> 새로운 기능 개발 및 버그 수정이 필요할 때마다 'develop' 브랜치로부터 분기한다. 개발이 완료되면 'develop' 브랜치로 병합하여 다른 사람들과 공유한다.
