$ErrorActionPreference = "Stop"

$ImageName = "hasalpcode/todo-api:latest"

Write-Host "Scanning image: $ImageName"
docker run --rm `
  -v //var/run/docker.sock:/var/run/docker.sock `
  aquasec/trivy:latest image --severity HIGH,CRITICAL $ImageName
