import { Models } from '@rematch/core'
import { taskGenerator } from './taskGenerator'
import { taskFeed } from './taskFeed'

export interface RootModel extends Models<RootModel> {
    taskFeed: typeof taskFeed
    taskGenerator: typeof taskGenerator
}

export const models: RootModel = { taskFeed, taskGenerator }