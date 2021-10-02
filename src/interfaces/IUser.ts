interface balance {
    stars: number
    gems: number
    items: string[]
}

interface profile {
    banner: string
    medals: string[]
    reputation: number
    description: string
}

interface IUser {
    id: string
    xp: number
    balance: balance
    profile: profile
    blacklisted: boolean
}

export default IUser;