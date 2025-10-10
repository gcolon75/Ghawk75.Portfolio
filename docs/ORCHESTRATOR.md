# AI Orchestrator for Project Valine

## Overview

The AI orchestrator for Project Valine has been **consolidated into the canonical repository**: [ghawk75-ai-agent/orchestrator](https://github.com/gcolon75/ghawk75-ai-agent).

Project Valine no longer contains orchestrator application code. All orchestrator development, deployment, and maintenance now happens in the **ghawk75-ai-agent** repository.

## Why the Consolidation?

The orchestrator was moved to create a single source of truth for AI agent functionality. This improves:
- **Maintainability**: One codebase, one deployment pipeline, one set of docs
- **Reusability**: The orchestrator can serve multiple projects beyond Valine
- **Security**: Centralized security scanning and dependency management
- **Development velocity**: Faster iteration without coordinating across repos

## Canonical Configuration

The orchestrator uses the following canonical settings:

### Endpoints
- **Discord endpoint**: `/discord`
- **GitHub webhook**: `/github/webhook`

### Environment Variables
- **Run table environment variable**: `RUN_TABLE_NAME`

### DynamoDB Table Naming
- **Table name pattern**: `valine-orchestrator-runs-${Stage}`
  - Example for dev: `valine-orchestrator-runs-dev`
  - Example for prod: `valine-orchestrator-runs-prod`

## Quick Links

For deployment, integration, and testing documentation, see the ghawk75-ai-agent repository:

- **Deployment Guide**: [ghawk75-ai-agent deployment docs](https://github.com/gcolon75/ghawk75-ai-agent#deployment)
- **Integration Guide**: [ghawk75-ai-agent integration docs](https://github.com/gcolon75/ghawk75-ai-agent#integration)
- **Testing Guide**: [ghawk75-ai-agent testing docs](https://github.com/gcolon75/ghawk75-ai-agent#testing)
- **Main Repository**: [gcolon75/ghawk75-ai-agent](https://github.com/gcolon75/ghawk75-ai-agent)

## Integration Verification Checklist

When integrating the orchestrator with Project Valine, verify the following:

### 1. GitHub Webhook Configuration
- [ ] In **Project-Valine repository settings** → Webhooks → Add webhook
- [ ] Set **Payload URL** to the SAM output URL ending in `/github/webhook`
- [ ] Set **Content type** to `application/json`
- [ ] Configure the shared **Secret** (same as Lambda environment variable)
- [ ] Select events: `Issues`, `Issue comments`, `Pull requests`, `Pull request reviews`
- [ ] Ensure webhook is **Active**

### 2. Discord Interactions Endpoint
- [ ] In **Discord Developer Portal** → Applications → Your App → General Information
- [ ] Set **Interactions Endpoint URL** to the SAM output URL ending in `/discord`
- [ ] Verify the endpoint responds to Discord's verification ping
- [ ] Test with a slash command in your Discord server

### 3. Lambda Environment Configuration
- [ ] Verify Lambda has environment variable `RUN_TABLE_NAME` set
- [ ] Verify the value matches your stage (e.g., `valine-orchestrator-runs-dev`)
- [ ] Check other required environment variables (Discord tokens, GitHub tokens, etc.)

### 4. DynamoDB Table Verification
- [ ] Confirm DynamoDB table exists: `valine-orchestrator-runs-${Stage}`
- [ ] Verify table has appropriate read/write capacity or on-demand billing
- [ ] Check IAM permissions allow Lambda to read/write the table

### 5. Sanity Tests

#### Test GitHub Integration
1. Create a test issue in Project-Valine repository
2. Add the `ready` label to trigger orchestrator
3. Check Lambda CloudWatch logs for webhook processing
4. Verify a run record appears in DynamoDB

#### Test Discord Integration
1. Run `/plan` command in your Discord server
2. Verify the bot responds and creates a thread
3. Check CloudWatch logs for Discord interaction processing
4. Confirm run record in DynamoDB includes Discord thread information

## Contributing

To contribute to orchestrator development:

1. **Open issues** in the [ghawk75-ai-agent repository](https://github.com/gcolon75/ghawk75-ai-agent/issues)
2. **Submit pull requests** to the orchestrator code in ghawk75-ai-agent
3. Follow the contribution guidelines in that repository

## Support

For questions or issues:
- Check the [ghawk75-ai-agent documentation](https://github.com/gcolon75/ghawk75-ai-agent)
- Open an issue in the appropriate repository:
  - Orchestrator issues: [ghawk75-ai-agent](https://github.com/gcolon75/ghawk75-ai-agent/issues)
  - Project Valine app issues: [Project-Valine](https://github.com/gcolon75/Project-Valine/issues)
