# Deploy the Docker image to DockerHub
[CmdletBinding()]
param (
    [string]$tag = "auto"
)

if ($tag -eq "auto") {
    $tag = (Get-Content package.json) -join "`n" | ConvertFrom-Json | Select -ExpandProperty "version"
}
Write-Output "tag: $tag"

docker login -u carlhugo

docker build --rm -f "Dockerfile" -t ogechobot:$tag . --no-cache
docker tag ogechobot:$tag carlhugo/ogechobot:$tag
docker push carlhugo/ogechobot:$tag
