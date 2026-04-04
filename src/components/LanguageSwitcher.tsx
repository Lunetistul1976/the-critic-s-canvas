import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { supportedLanguages, type SupportedLanguage } from "../i18n";

const selectSx = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "hsl(220, 15%, 13%)",
  bgcolor: "hsl(35, 30%, 96%)",
  borderRadius: "6px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(35, 15%, 85%)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(38, 65%, 50%)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(38, 65%, 50%)",
    borderWidth: "1px",
  },
} as const;

const menuProps = {
  PaperProps: {
    sx: {
      bgcolor: "hsl(35, 30%, 96%)",
      "& .MuiMenuItem-root": {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
      },
    },
  },
} as const;

const nativeNames: Record<SupportedLanguage, string> = {
  en: "English",
  ro: "Română",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
};

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const base = (i18n.resolvedLanguage ?? i18n.language).split("-")[0] as SupportedLanguage;
  const value = supportedLanguages.includes(base) ? base : "en";

  const handleChange = (event: SelectChangeEvent<string>) => {
    void i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined" size="small" sx={{ minWidth: 132 }}>
      <Select
        value={value}
        onChange={handleChange}
        aria-label={t("languageSwitcher.label")}
        sx={selectSx}
        MenuProps={menuProps}
      >
        {supportedLanguages.map((code) => (
          <MenuItem key={code} value={code}>
            {nativeNames[code]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
