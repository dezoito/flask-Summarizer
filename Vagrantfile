# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

    config.vm.define :flask_resume do |flask_config|
      # All Vagrant configuration is done here. The most common configuration
      # options are documented and commented below. For a complete reference,
      # please see the online documentation at vagrantup.com.

      # Every Vagrant virtual environment requires a box to build off of.
      flask_config.vm.box = "ubuntu/trusty32"
      # flask_config.vm.box_url = "http://files.vagrantup.com/trusty32.box"
      # ele é chamado usando vagrant up --provision
      flask_config.vm.provision :shell, path: "install.sh"

      # o script abaixo inicia o aplication de inventario
      # flask_config.vm.provision :shell, path: "startapp.sh"

      # porta mapeada para o webserver de dev do django (util para debug)
      flask_config.vm.network :forwarded_port, host: 5000, guest: 5000

      # porta mapeada para o webserver gunicorn
      # flask_config.vm.network :forwarded_port, host: 8001, guest: 8001

      # porta mapeda para o nginx
      # flask_config.vm.network :forwarded_port, host: 4567, guest: 80

      # Disable automatic box update checking. If you disable this, then
      # boxes will only be checked for updates when the user runs
      # `vagrant box outdated`. This is not recommended.
      # config.vm.box_check_update = false

      # Provider-specific configuration so you can fine-tune various
      # backing providers for Vagrant. These expose provider-specific options.
      # Example for VirtualBox:
      #
      django_config.vm.provider "virtualbox" do |vb|
        # Don't boot with headless mode
        vb.gui = true

        # Use VBoxManage to customize the VM. For example to change memory:
        vb.customize ["modifyvm", :id, "--memory", "512"]
      end

    end

end
