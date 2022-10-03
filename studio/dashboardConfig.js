export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633b6eeb115d7b0b13d29dbf',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-tm-studio',
                  apiId: 'be28f88e-4ea1-4b4e-bf00-6a2833cc0454'
                },
                {
                  buildHookId: '633b6eeb8efbdb0b6503218f',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-tm',
                  apiId: '0f412c0d-eb90-4011-a566-a92be3de236c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-sapper-blog-tm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-tm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
