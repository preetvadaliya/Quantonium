/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: `Hey @${context.payload.issue.user.login} Thanks for making an issue, I hope an admin gets it as soon as possible.\n\n\n\n\n\nQuantonium Baby\nCreated By. @preetvadaliya`,
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.assigned", async (context) => {
    const issueComment = context.issue({
      body: `Hey @${context.payload.issue.assignee.login} Best of Luck for your future work.\n\n\n\n\n\nQuantonium Baby\nCreated By. @preetvadaliya`,
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("pull_request.opened", async (context) => {
    const pullComment = context.pullRequest({
      body: `Hey @${context.payload.pull_request.user} Thanks for making a pull request, I hope an admin gets it as soon as possible.\n\n\n\n\n\nQuantonium Baby\nCreated By. @preetvadaliya`,
    });
    return context.octokit.pulls.createComment(pullComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
