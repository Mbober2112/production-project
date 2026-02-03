import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyCaskTypeTabs.module.scss";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { WhiskyCaskType } from "entitiesModule/Whisky/model/types/whisky";
import { Text } from "shared/ui/Text/Text";

interface WhiskyCaskTypeTabsProps {
  className?: string;
  selectedType: WhiskyCaskType;
  onSelectType: (type: WhiskyCaskType) => void;
}

export const WhiskyCaskTypeTabs = memo(
  ({ className, selectedType, onSelectType }: WhiskyCaskTypeTabsProps) => {
    const { t } = useTranslation("whisky");

    const tabs = useMemo<TabItem[]>(
      () => [
        { value: WhiskyCaskType.ALL, content: t(WhiskyCaskType.ALL) },
        {
          value: WhiskyCaskType.BOURBON_CASK,
          content: t(WhiskyCaskType.BOURBON_CASK),
        },
        {
          value: WhiskyCaskType.RUM_CASK,
          content: t(WhiskyCaskType.RUM_CASK),
        },
        {
          value: WhiskyCaskType.SHERRY_CASK,
          content: t(WhiskyCaskType.SHERRY_CASK),
        },
        {
          value: WhiskyCaskType.PORT_CASK,
          content: t(WhiskyCaskType.PORT_CASK),
        },
      ],
      [],
    );

    const onTabClick = useCallback(
      (tab: TabItem) => {
        onSelectType(tab.value as WhiskyCaskType);
      },
      [onSelectType],
    );

    return (
      <div className={classNames(cls.whiskyTypeTabs, {}, [className])}>
        <Text text={t("casks")} />
        <Tabs tabs={tabs} value={selectedType} onTabClick={onTabClick} />
      </div>
    );
  },
);
