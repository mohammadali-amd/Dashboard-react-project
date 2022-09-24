import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => {
   return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
         <Header category="App" title="Editor" />
         <RichTextEditorComponent>
            <EditorData />
            <Inject services={[HtmlEditor, Image, Toolbar, Link, QuickToolbar]} />
         </RichTextEditorComponent>
      </div>
   );
};

export default Editor;