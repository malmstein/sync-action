# Sync Account creation

This action generates a recovery code to be used by Maestro.

## Outputs

### `recovery-code`

The recovery code generated.

## Example usage

```yaml
uses: malmstein/sync-action@master
with:
  github-path: 'Github PAT'
```