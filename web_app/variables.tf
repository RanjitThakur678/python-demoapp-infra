variable "resource_group_name" {
  type        = string
  description = "RG name in Azure"
  default = "demo-webapp-python"

}

variable "resource_group_location" {
  type        = string
  description = "RG location in Azure"
  default = "West Europe"
}

variable "app_service_plan_name" {
  type        = string
  description = "App Service Plan name in Azure"
  default ="my-appserviceplan-linux"
}

variable "app_service_name" {
  type        = string
  description = "App Service name in Azure"
  default = "python-demo-webapp"
}

variable "container_image_name" {
  type = string
  description = "image name"
  default = "python-demo-flask-webapp"
  
}

variable "container_registry_name" {
  description = "Name of the Azure Container Registry"
  type        = string
}

variable "container_image_tag" {
  type = string
  description = "image tag"
  default = "latest"
  
}
