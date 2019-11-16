import { Toolkit } from 'actions-toolkit'

export function createIssue(title: string, body: string, labels?: string[]) {
  Toolkit.run(
    async tools => {
      tools.log.info(`Creating new issue ${title}`)

      try {
        const issue = await tools.github.issues.create({
          ...tools.context.repo,
          title,
          body,
          labels,
        })
        tools.log.success(`Created issue ${issue.data.title}#${issue.data.number}: ${issue.data.html_url}`)
      } catch (error) {
        tools.log.error(error)
        if (error.errors) {
          tools.log.error(error.errors)
        }
        tools.exit.failure()
      }
    },
    {
      secrets: ["GITHUB_TOKEN"],
    }
  )
}
