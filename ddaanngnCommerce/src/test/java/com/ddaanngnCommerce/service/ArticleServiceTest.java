package com.ddaanngnCommerce.service;

import com.ddaanngnCommerce.domain.Article;
import com.ddaanngnCommerce.domain.ArticleRepository;
import com.ddaanngnCommerce.dto.ArticleCreateDto;
import com.ddaanngnCommerce.exception.NotFoundException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ArticleServiceTest {

    @Mock
    ArticleRepository articleRepository;

    @InjectMocks
    ArticleService articleService;

    @DisplayName("성공적으로 게시글이 추가된 경우")
    @Test
    void createArticleSuccessfully() {
        //given
        final ArticleCreateDto articleCreateDto = new ArticleCreateDto();
        final Article article = mock(Article.class);
        given(articleRepository.save(any(Article.class))).willReturn(article);

        //when
        Article savedArticle =  articleService.createArticle(articleCreateDto);

        //then
        verify(articleRepository).save(any(Article.class));
    }

    @DisplayName("성공적으로 모든 게시글을 불러오는 경우")
    @Test
    void getArticlesSuccessfully() {
        //given
        final List articles = mock(List.class);
        given(articleRepository.findAll()).willReturn(articles);

        //when
        List<Article> articlesByGetArticles = articleService.getArticles();

        //then
        verify(articleRepository).findAll();
    }

    @DisplayName("게시글 ID로 게시글을 성공적으로 조회하는 경우")
    @Test
    void getArticleByIdSuccessfully() {
        //given
        final Article article = mock(Article.class);
        when(article.getId()).thenReturn(1L);
        given(articleRepository.findById(1L)).willReturn(Optional.of(article));

        //when
        Article getArticle = articleService.getArticleById(1L);

        //then
        verify(articleRepository).findById(1L);
        assertThat(getArticle.getId()).isEqualTo(1L);
    }

    @DisplayName("게시글 ID를 통해 게시글을 찾을 수 없는 경우")
    @Test
    void getArticleByIdFailure() {
        //given
        given(articleRepository.findById(anyLong())).willReturn(Optional.empty());

        //when&then
        assertThrows(NotFoundException.class, ()->articleService.getArticleById(anyLong()));
        verify(articleRepository).findById(anyLong());
    }
}