
## Key Concepts

### Components

Components are organized by feature in `/components`. Reusable widgets are in `/components/widgets`.

Example component:

```tsx
// components/profile/profile-card.tsx
import {User} from 'common/src/user'

interface ProfileCardProps {
  user: User
  onLike?: (userId: string) => void
}

export function ProfileCard({user, onLike}: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={user.avatarUrl} alt={user.name} />
      <h3>{user.name}</h3>
      <button onClick={() => onLike?.(user.id)}>Like</button>
    </div>
  )
}
```

### Hooks

Use custom hooks for stateful logic. Common hooks:

- `useUser()` - Get current user
- `useAPIGetter()` - Fetch API data with caching
- `useMutation()` - Handle form submissions
- `usePersistentInMemoryState()` - Cache state across pages

```tsx
import {useAPIGetter} from 'web/hooks/use-api-getter'

function ProfileList() {
  const {data, refresh} = useAPIGetter('get-profiles', {})

  if (!data) return <Loading />

  return (
    <div>
      {data.profiles.map((profile) => (
        <ProfileCard key={profile.id} user={profile} />
      ))}
      <button onClick={refresh}>Refresh</button>
    </div>
  )
}
```


### Styling

Tailwind CSS is used for styling. Use utility classes:

```tsx
<div className="flex items-center justify-between p-4 bg-canvas-50 rounded-lg">
  <span className="text-ink-900 font-medium">Content</span>
</div>
```