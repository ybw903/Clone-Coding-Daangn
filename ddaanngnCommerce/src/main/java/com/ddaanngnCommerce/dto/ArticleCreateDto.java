package com.ddaanngnCommerce.dto;

import com.ddaanngnCommerce.domain.Article;
import com.ddaanngnCommerce.domain.Category;
import com.ddaanngnCommerce.domain.Status;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@NoArgsConstructor
public class ArticleCreateDto {

    private String title;
    private String content;
    private String userId;
    private int price;
    private String region;
    private Category category;
    private String imgURL;

    @Builder
    public ArticleCreateDto (String title, String content,
                             String userId, int price,
                             String region, Category category,
                             String imgURL) {
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.price = price;
        this.region = region;
        this.category = category;
        this.imgURL = imgURL;
    }

    public Article toEntity() {
        return Article.builder()
                .category(category)
                .content(content)
                .price(price)
                .title(title)
                .imgURL(imgURL)
                .region(region)
                .userId(userId)
                .build();
    }

}
