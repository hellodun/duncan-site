### This is my site repo built with [Hugo](https://gohugo.io/installation/)

 <!-- insert screenshot -->

## Setup Guide

Follow the installation instructions for installing the following
1. ### Install [Hugo](https://gohugo.io/installation/)
   
2. ### Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

3. Select a theme from [Hugo themes](https://themes.gohugo.io/) and flollow the installaion guides 

## Customize the site with your data

### Basic Configuration

The config.yml is your best friend. You can modify and add information, such as ...

- Title of the page
- Your Name
- Social Icons
- Buttons

You can easily add social icons like LinkedIn, Twitter, Youtube, Instagram, ... just have a look in the config.yml. Examples are already added.

### Change Profile Image

To add your profile pic, replace ***profile.png*** in the folder ***static/images***.

### Add tabs

In the config.yml you can add new tabs next to 'Articles' and 'Contact'. Uncomment 'Category' to check it out.

***Note***
If you add a new tab in the config.yml, you have to do the following:

1. Add new folder in the directory 'content' with the ***same name*** as the new tab.
2. Copy ***_index.md*** from articles into new folder.

### Add new content

If you like to push new content, create a new Markdown file in the new folder. Find an example in ***content/articles/article.md***.


## Deploy the site

For deployment, you can use Nexlify or in the cloud. <br>
This was deployed to [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static/)
