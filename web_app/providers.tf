provider "azurerm" {
client_id = "a2d53b1f-b9f9-4e19-9d56-2a8b4bd60fa2"
client_secret = "XPt8Q~JOP3mTVaJKDw-jOMzpwQGa6G7PXCGQqcpK"
tenant_id = "2ea1efe4-ee51-402b-a0ca-06d6153709c0"
subscription_id = "a7685a07-99e8-43e8-a4de-317fb98abbe1"
features {}

}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.15.0"
    }
  }
}