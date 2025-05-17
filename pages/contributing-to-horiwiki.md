---
title: Contributing to HoriWiki Documentation
layout: main
permalink: Contributing_to_HoriWiki
---

Welcome to HoriWiki! This page contains information & documentation on adding, creating and/or modifying HoriWiki articles.

#### Pre-requisites

To contribute a HoriWiki article, you need a GitHub account to suggest an article (dynamic publishing will not be available due to GitHub Pages and HTML+CSS+JS limitations).

If you want your articles to be published faster, build up a wiki reputation so you can be added as a collaborator to the repository, in order to build one, you might just suggest over time, following the rules/code of conduct, which in that case...

#### Code of Conduct

To prevent any sort of unwanted articles or behavior, we have a code of conduct to help regulate these issues, these are needed guidelines to add, publish and modify articles.

You may not:

- add nor publish 18+/mature content to any of the articles.
- go out of topic, if you're making an article about something, stick to that something.
- modify other articles without permission.
- vandalize any of the articles.
- add false information to articles, nor make fake articles.
- cross personal boundaries, if some info gets too personal, please remove said content as of the person's request. (this also applies to admins)
- add anything that is not related to Horibyte.

If you break any of these, your ability to add new articles will be removed.

#### Making an article

##### Regular

To suggest an article, you can make a pull request of the wiki's main repo ([github.com/horibyte/wiki](https://github.com/horibyte/wiki)), then add your suggested article to the `pages` directory on the root of the directory tree.<br>Your file should have this structure:

`---`
`title: *Your title here*`
`layout: main // <-- do not change that`
`permalink: Your_title_here`
`---`


Appending the `.html` file extension on the `permalink` is not needed, but it is recommended to make the page less-broken, `//`s are comments.<br>The title of the page should be the same on the permalink, but the spaces should be replaced with underscores.

##### Administrators/Collaborators (on the repo)

The process is the same, but does not require making a pull request, as you should be able to upload the file directly to the repo.

#### Markdown support (BETA)
These are the Markdown syntaxes that are compatible with this wiki's engine (as of Alpha 1.1)

Pre-Alpha 0.2 to 0.5.3 used HTML Tags, Markdown support added by Clyron. (thanks!)

List of compatible syntaxes:

- **Bold** (`**text**`)
- *Italic* (`*text*`)
- ~~Strikethrough~~ (`~~text~~`)
- [Link](https://example.com) (`[text](https://example.com)`)
- Header (`# text`)
- Header 2 (`## text`)
- Header 3 (`### text`)
- Header 4 (`#### text`)
- Header 5 (`##### text`)
- Header 6 (`###### text`)
- Code (\`text`)
- Blockqoute (`> text`)


- List item (`- text`)
    - List sub-item (`  - text`)
1. Number item (`1. text`)
- Image (`![alt text]([pathtoimage]){: *html code here*}`)
![horicraft A](img/articles/a_emoji/a_horicraft.png){: style="width:25% !important;"}
(^ example of image)

When linking to paths, do not use `/` at the start of the path:
❌: `/img/horibyte_moment/a_win1.png`
✅: `img/horibyte_moment/a_win1.png`

The reason this is needed is due to how links work since this is a separate hosted repo being in a same domain.