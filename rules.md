# PR Validation Rules

## NO_CONSOLE_LOG
severity: error
pattern: console.log
description: console.log should not be used

## FILE_NAMING
severity: error
type: filename
regex: ^[a-z0-9-]+\.js$

## STRICT_MODE
severity: warning
pattern: "use strict"
