import fs from "fs"
import path from "path"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

import { registry } from "@/_registry"
import { UnistNode, UnistTree } from "./unist"

export function rehypeComponent() {
    return async (tree: UnistTree) => {
      visit(tree, (node: UnistNode) => {
        // src prop overrides both name and fileName.


        const { value: srcPath } =
          (getNodeAttributeByName(node, "src") as {
            name: string
            value?: string
            type?: string
          }) || {}

        if (node.name === "ComponentSource") {
          const name = getNodeAttributeByName(node, "name")?.value as string
          // const fileName = getNodeAttributeByName(node, "fileName")?.value as string | undefined
  
          if (!name && !srcPath) {
            return null
          }

          try {
            const src: string = srcPath ? path.join(process.cwd(), srcPath) : ''
            // TODO: Add your logic here to determine src if srcPath is not provided
            
            // Read the source file.
            const filePath = src
            let source = fs.readFileSync(filePath, "utf8")

            // Replace @fatcn-ui with @components
            source = source.replace(/@fatcn-ui/g, '@components')

            // Add code as children so that rehype can take over at build time.
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src,
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"],
                    },
                    children: [
                      {
                        type: "text",
                        value: source,
                      },
                    ],
                  }),
                ],
              })
            )
          } catch (error) {
            console.error(error)
          }
        }
  
        if (node.name === "ComponentPreview") {
          console.log("ComponentPreview", node.name)
          const name = getNodeAttributeByName(node, "name")?.value as string
  
          if (!name) {
            return null
          }
  

          try {
            // TODO: Add your logic here to determine the source file path
            const src = registry[name as keyof typeof registry].src
            
            // Read the source file.
            const filePath = src
            let source = fs.readFileSync(filePath, "utf8")

            // Replace @fatcn-ui with @components
            source = source.replace(/@fatcn-ui/g, '@components')
  
            // Add code as children so that rehype can take over at build time.
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  // __src__: src,
                  name: name,
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"],
                    },
                    children: [
                      {
                        type: "text",
                        value: source,
                      },
                    ],
                  }),
                ],
              })
            )
          } catch (error) {
            console.error(error)
          }
        }

      })
    }
  }
  
  function getNodeAttributeByName(node: UnistNode, name: string) {
    return node.attributes?.find((attribute) => attribute.name === name)
  }
  
  // function getComponentSourceFileContent(node: UnistNode) {
  //   const src = getNodeAttributeByName(node, "src")?.value as string
  
  //   if (!src) {
  //     return null
  //   }
  
  //   // Read the source file.
  //   const filePath = path.join(process.cwd(), src)
  //   const source = fs.readFileSync(filePath, "utf8")
  
  //   return source
  // }
