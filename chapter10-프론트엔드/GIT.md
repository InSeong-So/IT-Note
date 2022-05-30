# git branch 전략
## Protect matching branches
### 1. `Require a pull request before merging`
이 옵션을 선택하면 모든 커밋을 보호되지 않는 Branch로 만들고 Pull Request를 통해 제출해야 이 규칙과 일치하는 Branch로 병합할 수 있습니다.

<br>

### 2. `Require status checks to pass before merging`
이 규칙과 일치하는 Branch로 Branch를 병합하기 전에 통과해야 하는 [상태 검사](https://docs.github.com/en/rest/commits#commit-statuses)를 선택하십시오. 이 옵션을 선택하면 커밋을 먼저 다른 Branch로 푸시한 다음 상태 검사가 통과한 후 이 규칙과 일치하는 Branch로 병합하거나 직접 푸시해야 합니다.

<br>

### 3. `Require conversation resolution before merging`
이 옵션을 선택하면 Pull Request를 이 규칙과 일치하는 Branch로 병합하기 전에 코드의 conversations를 확인해야 합니다.

<br>

### 4. `Require signed commits`
일치하는 Branch에 푸시된 커밋에는 verified signatures가 있어야 합니다.

<br>

### 5. `Require linear history`
병합 커밋이 일치하는 Branch에 푸시되지 않도록 합니다.

<br>

### 6. `Require deployments to succeed before merging`
이 규칙과 일치하는 Branch로 Branch를 병합하려면 먼저 배포해야 하는 환경을 선택하십시오.

<br>

### 7. `Include administrators`
관리자에게 위의 구성된 모든 제한을 적용합니다.

<br>

### 8. `Restrict who can push to matching branches`
일치하는 Branch에 푸시할 수 있는 사용자, 팀 또는 앱을 지정합니다. 필요한 상태 확인은 검사가 실패해도 이러한 사용자, 팀 및 앱이 병합되지 않습니다.

<hr>
<br>

## Rules applied to everyone including administrators
### 1. `Allow force pushes`
Push 권한이 있는 모든 사용자에게 Force Push를 허용합니다.

### 2. `Allow deletions`
Push 권한이 있는 사용자가 일치하는 Branch를 삭제할 수 있습니다.

<br>