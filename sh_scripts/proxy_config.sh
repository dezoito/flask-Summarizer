echo "***********************************************"
echo "---Copiando configs para /etc/apt/apt.conf---"
echo "***********************************************"
# copia configs de proxu para o apt
# (Rodar apenas em prod)
sudo cp /app/sh_scripts/apt_proxy_config /etc/apt/apt.conf
