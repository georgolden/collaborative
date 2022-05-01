# Open source library R&D for collaborative web applications

## Goals

- Create an application which simplify collaborative applications development
- Create best practices for collaborative apps

## Tasks

- Research CRDT
- Research Git
- Research common and non common collaborative app problems
- Implement basic Client fucntionality up to 20 people with simple shared workspace (document)
- Impelemnt basic Server implementation to maintain collaborative fucntionality

## Structure

| Folder name | Description                                       | Advice                                                                                   |
|-------------|---------------------------------------------------|------------------------------------------------------------------------------------------|
| lib         | For helpers to build server                       | Keep here everything, that you want to reuse on server layer                             |
| api         | For transport agnostic API methods implementation | keep here only code, which correspond to API method functionality                        |
| domain      | For business logic functionality                  | logic, which invoked under the API method must be here, never keep fat API method        |
| static      | For static files and client code or client build  | keep here only code, which will served as static and client code or client build as well |
