export async function projectLoader(projectSlug) {
  const project = await import(`~/contents/services/${projectSlug}.md`)
  project.attributes.slug = projectSlug
  project.attributes.date = new Date(project.attributes.date)
  project.attributes.link = `/services/${projectSlug}/`
  project.attributes.mins = Math.round(project.body.length / 1250) || 1

  // Extract table of contents from post
  project.attributes.tableOfContents = (() => {
    let fragment
    if (process.server) {
      const { JSDOM } = require('jsdom')
      fragment = JSDOM.fragment(`<div>${project.html}</div>`).firstChild
    } else {
      fragment = document.createElement('div')
      fragment.innerHTML = project.html
    }

    const tableOfContents = fragment.querySelector('.table-of-contents')
    return tableOfContents && tableOfContents.outerHTML
  })()

  return project
}

export const projectSlugs = [
  'maritime-detection-tracking',
  'oil-gas-transport',
  'aiot-sensors',
  'shale-site-detection'
  // 'ai-development',
  // 'atak-development'
]
