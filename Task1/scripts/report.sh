#!/bin/bash

# 1. إنشاء ملف تقرير بتاريخ اليوم داخل ./notes
DATE=$(date +"%Y-%m-%d")
REPORT_FILE="./notes/report-$DATE.txt"

mkdir -p ./notes
touch "$REPORT_FILE"

# 2. إضافة المعلومات المطلوبة
echo "اسم المستخدم: $USER" >> "$REPORT_FILE"
echo "المسار الحالي: $(pwd)" >> "$REPORT_FILE"
echo "عدد الملفات داخل ./data: $(ls -1 ./data 2>/dev/null | wc -l)" >> "$REPORT_FILE"

# 3. طباعة رسالة نجاح
echo "تم إنشاء تقرير اليوم بنجاح: $REPORT_FILE"
