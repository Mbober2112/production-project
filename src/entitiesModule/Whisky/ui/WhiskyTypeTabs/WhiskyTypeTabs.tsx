import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyTypeTabs.module.scss";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { Text } from "shared/ui/Text/Text";

interface WhiskyTypeTabsProps {
  className?: string;
  selectedType: WhiskyType;
  onSelectType: (type: WhiskyType) => void;
}

export const WhiskyTypeTabs = memo(
  ({ className, selectedType, onSelectType }: WhiskyTypeTabsProps) => {
    const { t } = useTranslation("whisky");

    const tabs = useMemo<TabItem[]>(
      () => [
        { value: WhiskyType.ALL, content: t(WhiskyType.ALL) },
        { value: WhiskyType.BLENDED, content: WhiskyType.BLENDED },
        { value: WhiskyType.BLENDED_MALT, content: WhiskyType.BLENDED_MALT },
        { value: WhiskyType.BOURBON, content: WhiskyType.BOURBON },
        { value: WhiskyType.SINGLE_MALT, content: WhiskyType.SINGLE_MALT },
        { value: WhiskyType.SINGLE_GRAIN, content: WhiskyType.SINGLE_GRAIN },
      ],
      [],
    );

    const onTabClick = useCallback(
      (tab: TabItem) => {
        onSelectType(tab.value as WhiskyType);
      },
      [onSelectType],
    );

    return (
      <div className={classNames(cls.whiskyTypeTabs, {}, [className])}>
        <Text text={t("category")} />
        <Tabs tabs={tabs} value={selectedType} onTabClick={onTabClick} />
      </div>
    );
  },
);
