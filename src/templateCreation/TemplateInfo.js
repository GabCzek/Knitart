import React from "react";

import TemplateInfoForm from "./TemplateInfoForm";
import TemplateIcons from "./TemplateIcons";

const TemplateInfo = ({ rows, columns, changePrimaryColor, changeSecondaryColor, changeTertiaryColor, changeActiveColor, changeRows, changeColumns }) => (
  <div className="template-info">
    <TemplateInfoForm
      rows={rows}
      columns={columns}
      changeRows={changeRows}
      changeColumns={changeColumns}
      changePrimaryColor={changePrimaryColor}
      changeSecondaryColor={changeSecondaryColor}
      changeTertiaryColor={changeTertiaryColor}
      changeActiveColor={changeActiveColor}
    />
    <TemplateIcons/>
  </div>
);

export default TemplateInfo;
