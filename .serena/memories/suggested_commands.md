Setup:
```bash
corepack enable
yarn install
```
Run:
```bash
yarn start
yarn ios
yarn android
yarn web
```
Native prebuild (when native config changes):
```bash
expo prebuild --clean
```
Lint & test:
```bash
yarn lint
yarn test
```
Troubleshooting:
```bash
yarn reset-project
```
Useful macOS commands:
```bash
git status && git branch -vv
ls -la
find . -name "*.ts" | wc -l
grep -R "expo-router" src | head
open -a Simulator
```
