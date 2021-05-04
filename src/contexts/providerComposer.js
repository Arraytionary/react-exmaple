import React from "react";
import {PostProvider} from "./postContext";
import {AlbumProvider} from "./albumContext";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[<PostProvider></PostProvider>, <AlbumProvider></AlbumProvider>]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider }
