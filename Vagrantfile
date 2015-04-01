# -*- mode: ruby -*-
# vi: set ft=ruby :
#
 require 'rbconfig'

  # returns a string with a generic name for the HOST os
  def os
    @os ||= (
      host_os = RbConfig::CONFIG['host_os']
      case host_os
      when /mswin|msys|mingw|cygwin|bccwin|wince|emc/
        :windows
      when /darwin|mac os/
        :macosx
      when /linux/
        :linux
      when /solaris|bsd/
        :unix
      else
        raise Error::WebDriverError, "unknown os: #{host_os.inspect}"
      end
    )
  end

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.define :flask_summary do |flask_config|

    flask_config.vm.box = "ubuntu/lucid32"
    flask_config.vm.box_url = "http://files.vagrantup.com/lucid32.box"

    # If this is running in a windows host, we have to configure a proxy
    # for the guest OS
    if os == "windows"
      flask_config.vm.provision :shell, path: "./shell_commands/proxy_config.sh"
    end

    # complete provisioning for guest OS
    flask_config.vm.provision :shell, path: "./shell_commands/install.sh"

    # Automatically starts flask application
    # This is commented out because now the app is started using Supervisor
    # flask_config.vm.provision :shell, path: "./shell_commands/startapp.sh", run: "always"

    # porta mapeada para o webserver de dev do flask (util para debug)
    flask_config.vm.network :forwarded_port, host: 5000, guest: 5000

    # config.vm.box_check_update = false

    flask_config.vm.provider "virtualbox" do |vb|
      # Don't boot with headless mode
      vb.gui = false

      # Use VBoxManage to customize the VM. For example to change memory:
      vb.customize ["modifyvm", :id, "--memory", "512"]
    end
  end
end
